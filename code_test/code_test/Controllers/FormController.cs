using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace code_test.Controllers
{
    public class FormController : Controller
    {
        // GET: Form
        public ActionResult Index()
        {
            return View();
        }



        public ActionResult GetTenFriendly(string input)
        {
            var result = input; 
            if (input.Length < 1)//something here
            {
                result = input;
            }
            return Json(result); 
        }
    }
}