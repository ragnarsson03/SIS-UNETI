import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private dataSource: DataSource) { }

  async getHello(): Promise<string> {
    // Esto verifica si la conexión a la DB de la UNETI está activa
    const isConnected = this.dataSource.isInitialized;
    return `SIS-UNETI API: Online. Conexión a DB: ${isConnected ? 'EXITOSA ✅' : 'FALLIDA ❌'}`;
  }
}