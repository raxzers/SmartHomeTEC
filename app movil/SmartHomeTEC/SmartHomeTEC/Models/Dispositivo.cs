using SQLite;
using System;
using System.Collections.Generic;
using System.Text;

namespace SmartHomeTEC.Models
{
    [Table ("Dispositivos")]
    class Dispositivo
    {
        [PrimaryKey]
        public string Serie { get; set; }

        public string Descripcion { get; set; }

        public string TipoDispositivo { get; set; }

        public string Marca { get; set; }

        public string Consumo { get; set; }

        public string Aposento { get; set; }

        public string Garantia { get; set; }

        public string Estado { get; set; }
    }
}
