using Newtonsoft.Json;

using SmartHomeTEC.Class.Aposento;
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
    public partial class GestionEstructural : ContentPage
    {
        public GestionEstructural()
        {
            InitializeComponent();
        }
        private async void Button_Clicked(object sender, EventArgs e)
        {
            AposentoElement aposento = new AposentoElement();
            aposento.Name = EntryAposento.Text;
            
            HttpClient clienteHttp = new HttpClient();
            string url = "http://192.168.0.11:5000/api/aposento/agregarAposento";

            var aposentoJson = JsonConvert.SerializeObject(aposento);
            var resultado = await clienteHttp.PostAsync(url, new StringContent(aposentoJson, Encoding.UTF8, "application/json"));
            var json = resultado.Content.ReadAsStringAsync().Result;

            if (json.Equals("ok"))
            {
                await DisplayAlert("Registro aposento ", "Registro correcto", "Ok");
                _ = Navigation.PushModalAsync(new GestionEstructural());
            }
            else
            {
                await DisplayAlert("Registro aposento", "Error de comunicacion", "Ok");
            }

        }
    }
}