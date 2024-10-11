using LOA_DMS_Capstone.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace LOA_DMS_Capstone.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

     

        public IActionResult Login()
        {
            return View();
        }

        public IActionResult Window1()
        {
            return View();
        }

        public IActionResult W1Upload()
        {
            return View();
        }

        public IActionResult W1Transac()
        {
            return View();
        }

        public IActionResult StatTransac() 
        {
            return View();  
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
