using SmartHomeTEC.Dependencies;
using SmartHomeTEC.Models;
using SQLite;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Xamarin.Forms;

namespace SmartHomeTEC.Repository
{
    public class RepositoryDispositivo
    {
        private SQLiteConnection cn;

        public RepositoryDispositivo() {
            this.cn = DependencyService.Get<IDataBase>().GetConnection();
        }

        public void CrearBBDD() {
            this.cn.DropTable<Dispositivo>();
            this.cn.CreateTable<Dispositivo>();
        }
        public List<Dispositivo> GetDispositivos()
        {
            var consulta = from datos in cn.Table<Dispositivo>()
                           select datos;
            return consulta.ToList();
        }
        public Dispositivo BuscarDispositivo(string num)
        {
            var consulta = from datos in cn.Table<Dispositivo>()
                           where datos.Serie == num
                           select datos;
            return consulta.FirstOrDefault();
        }

        public void InsertarDispositivo(string serie, string descripcion, string tipoDispositivo, string marca,string consumo, string aposento, string garantia, string estado)
        {
            Dispositivo dis = new Dispositivo();
            dis.Serie = serie;
            dis.Descripcion = descripcion;
            dis.TipoDispositivo = tipoDispositivo;
            dis.Marca = marca;
            dis.Consumo = consumo;
            dis.Aposento = aposento;
            dis.Garantia = garantia;
            dis.Estado = "0";

            this.cn.Insert(dis);
        }

        public void ModificarDispositivo( string serie, string estado)
        {
            Dispositivo dis = this.BuscarDispositivo(serie);
            dis.Estado = estado;
            this.cn.Update(dis);
        }
        public void EliminarDispositivo(string serie)
        {
            Dispositivo dis = this.BuscarDispositivo(serie);
            this.cn.Delete<Dispositivo>(serie);
        }

    }
}
