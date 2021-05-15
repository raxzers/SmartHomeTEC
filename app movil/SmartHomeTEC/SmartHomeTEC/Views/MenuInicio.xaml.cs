using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using prueba1Proyecto.Views;
namespace SmartHomeTEC.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class MenuInicio : ContentPage
    {
        public MenuInicio()
        {
            InitializeComponent();
        }
        private async void Button_Clicked(object sender, EventArgs e)
        {
            await Navigation.PushModalAsync(new GestionEstructural());

        }
        private async void Button_Clicked1(object sender, EventArgs e)
        {
            await Navigation.PushModalAsync(new GestionDispositivos());
        }
        private async void Button_Clicked2(object sender, EventArgs e)
        {

            await Navigation.PushModalAsync(new ControlDispositivos());

        }
    }
}