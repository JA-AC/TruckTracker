class HojaRuta {
  static contadorHoja = 0;
  constructor(camionero, placa, carga, origen, destino, cliente, fecha) {
    this._camionero = camionero;
    this._placa = placa;
    this._carga = carga;
    this._origen = origen;
    this._destino = destino;
    this._cliente = cliente;
    this._fecha = fecha;
    this._id = ++HojaRuta.contadorHoja;
  }
}
