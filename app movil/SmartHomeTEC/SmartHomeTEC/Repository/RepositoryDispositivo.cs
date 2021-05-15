using SmartHomeTEC.Dependencies;
using SmartHomeTEC.Models;
using SQLite;
using System;
using System.Collections.Generic;
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
    }
}
