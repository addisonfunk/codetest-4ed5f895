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

        static bool GetTenFriendly(string input)
        {
            bool result = false; 
            if (input.Length < 1)//something here
            {
                result = true;
            }
            return result; 
        }
    }
}