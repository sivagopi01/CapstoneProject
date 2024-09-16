using HabitTracker.Server.Data;
using Microsoft.AspNetCore.Mvc;

namespace HabitTracker.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseController : Controller
    {
        public readonly DataContext context;

        public BaseController(DataContext context)
        {
            this.context = context;
        }
    }
}
