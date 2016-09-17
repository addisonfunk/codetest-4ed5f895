using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(code_test.Startup))]
namespace code_test
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
