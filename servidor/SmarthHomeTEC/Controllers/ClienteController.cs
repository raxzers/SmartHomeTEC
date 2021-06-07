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
    public class ClienteController : Controller
    {
        private readonly IClienteRepository _clienterepository;

        public ClienteController(IClienteRepository clienterepository)
        {
            _clienterepository = clienterepository;
        }
        [HttpPost("login")]
        public async Task<IActionResult> GetLogin([FromBody] AClogin logincliente)
        {
            if (logincliente == null)
                return BadRequest();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var email1 = logincliente.Email;
            var passw1 = logincliente.Passw;
            Console.WriteLine(passw1);
            Console.WriteLine(email1);

            var created = await _clienterepository.CheckLogin(email1,passw1);
            if (created == true)
                return CreatedAtAction(nameof(GetLogin), "OK");
            else
                return CreatedAtAction(nameof(GetLogin), "FALLOOOOOOO");

        }

        [HttpGet]
        public async Task<IActionResult> GetAllCLientes()
        {
            return Ok(await _clienterepository.GetAllClientes());
        }
        [HttpGet("{email}")]
        public async Task<IActionResult> GetClienteEmail(string email)
        {
            return Ok(await _clienterepository.GetClienteEmail(email));
        }
        [HttpPost]
        public async Task<IActionResult> InsertarCliente([FromBody] Cliente cliente)
        {
            if (cliente == null)
                return BadRequest();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await _clienterepository.InsertCliente(cliente);

            return Created("created", created);
        }

        [HttpPut]
        public async Task<IActionResult> ActualizarCliente([FromBody] Cliente cliente)
        {
            if (cliente == null)
                return BadRequest();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _clienterepository.Actualizarcliente(cliente);

            return NoContent();
        }

        [HttpDelete("{email}")]
        public async Task<IActionResult> DeleteCliente(string email)
        {

            await _clienterepository.DeleteCliente(new Cliente { Email = email });

            return NoContent();
        }

    }
}