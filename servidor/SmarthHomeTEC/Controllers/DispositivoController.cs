using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SmarthHomeTEC.Data.Repositories;
using SmarthHomeTEC.Model;


namespace SmarthHomeTEC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DispositivoController : Controller
    {
        private readonly IDispositivoRepository _dispositivorepository;

        public DispositivoController(IDispositivoRepository Dispositivorepository)
        {
            _dispositivorepository = Dispositivorepository;
        }

    }
}