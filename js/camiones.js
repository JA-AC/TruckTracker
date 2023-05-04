class Camion {
  static contadorCamion = 0;
  constructor(marca, modelo, ano, placa, conductor) {
    this._marca = marca;
    this._modelo = modelo;
    this._ano = ano;
    this._placa = placa;
    this._conductor = conductor;
    this._id = ++Camion.contadorCamion;
  }
  get id() {
    return this._id;
  }
}
