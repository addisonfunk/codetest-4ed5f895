using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace code_test.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Ten Friendly Application";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Contact the Ten Friendly Team";

            return View();
        }
    }
}