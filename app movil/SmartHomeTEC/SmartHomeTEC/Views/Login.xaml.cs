using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using prueba1Proyecto.Views;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using SmartHomeTEC.Views;
using SmartHomeTEC.Class.Cliente;

namespace prueba1Proyecto.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Login : ContentPage
    {
        public Login()
        {
            InitializeComponent();
        }

        private async void Button_Clicked(object sender, EventArgs e)
        {
            ClienteLoginElement cliente = new ClienteLoginElement();
            cliente.Mail = EntryUserEmail.Text;
            cliente.Password = EntryUserPassword.Text;
            HttpClient clienteHttp = new HttpClient();
            string url = "http://192.168.0.11:5000/api/clientes/login";

            var clientJson = JsonConvert.SerializeObject(cliente);
            var resultado = await clienteHttp.PostAsync(url, new StringContent(clientJson, Encoding.UTF8, "application/json"));
            var json = resultado.Content.ReadAsStringAsync().Result;

            if (json.Equals("OK"))
            {
                await DisplayAlert("Login ", "Bienvenido", "Ok");
                _ = Navigation.PushModalAsync(new MenuInicio());
            }
            else {
                await DisplayAlert("Login ", "Datos erroneos", "Ok");   
            }

        }
    }
}