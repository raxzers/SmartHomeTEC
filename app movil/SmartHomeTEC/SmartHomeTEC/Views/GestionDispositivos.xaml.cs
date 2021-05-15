using Newtonsoft.Json;

using SmartHomeTEC.Class.Dispositivo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace SmartHomeTEC.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class GestionDispositivos : ContentPage
    {
        public GestionDispositivos()
        {
            InitializeComponent();
        }
        private async void Button_Clicked(object sender, EventArgs e)
        {
            DispositivoElement dispositivo = new DispositivoElement();
            dispositivo.Descripcion = EntryDescripcion.Text;
            dispositivo.TipoDispositivo = EntryTipoDispositivo.Text;
            dispositivo.Marca = EntryMarca.Text;
            dispositivo.Serie = EntrySerie.Text;
            dispositivo.Consumo = EntryConsumo.Text;
            dispositivo.Aposento = EntryAposento.Text;
            dispositivo.Garantia = EntryGarantia.Text;
            dispositivo.Estado = "0";
            HttpClient clienteHttp = new HttpClient();
            string url = "http://192.168.0.11:5000/api/dispositivo/agregarDispositivo";

            var clientJson = JsonConvert.SerializeObject(dispositivo);
            var resultado = await clienteHttp.PostAsync(url, new StringContent(clientJson, Encoding.UTF8, "application/json"));
            var json = resultado.Content.ReadAsStringAsync().Result;

            if (json.Equals("ok"))
            {
                await DisplayAlert("Registro dispositivo ", "Registro correcto", "Ok");
                _ = Navigation.PushModalAsync(new GestionDispositivos());
            }
            else
            {
                await DisplayAlert("Registro dispositivo", "Error de comunicacion", "Ok");
            }


        }
    }
}