using HabitTracker.Server.Data;
using HabitTracker.Server.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HabitTracker.Server.Controllers
{
    public class UserController(DataContext context) : BaseController(context)
    {
        [HttpGet]
        [Route("[action]")]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            var users = await this.context.Users.ToListAsync();
            return Ok(users);
        }
        [HttpPost]
        [Route("[action]")]
        public async Task<ActionResult<bool>> UpdateUser([FromBody] User user)
        {
            if (user == null) return BadRequest("Trying To pass null");
            if(user.Id > 0)
            {
                var existUser = await this.context.Users.FirstOrDefaultAsync(u=> u.Id == user.Id);
                if(existUser != null)
                {
                    existUser.FirstName = user.FirstName;
                    existUser.LastName = user.LastName;
                    existUser.UserName = user.UserName;
                    existUser.FirstName = user.FirstName;
                    existUser.Gender = user.Gender;
                    existUser.Password = user.Password;
                    context.Users.Update(existUser);
                }
            }
            else
            {
               await context.Users.AddAsync(user);
            }
            context.SaveChanges();
            return Ok(true);
        }
        [HttpGet]
        [Route("[action]/{userId:int}")]
        public async Task<ActionResult<bool>> DeleteUser(int userId)
        {
            var user = await this.context.Users.FirstOrDefaultAsync(u => u.Id == userId);
            if (user == null) return NotFound();
            context.Users.Remove(user);
            return Ok(true);
        }
        [HttpPost]
        [Route("[action]")]
        public async Task<ActionResult<User>> Login([FromBody] Login login)
        {
            var user = await this.context.Users.FirstOrDefaultAsync(u => u.UserName.Trim().ToLower() == login.UserName.Trim().ToLower() && u.Password == login.Password);
            if(user != null)
            {
                return user;
            }
            else
            {
                return NotFound("Invalid Credentials");
            }
        }
        [HttpGet]
        [Route("[action]/{userId:int}")]
        public async Task<ActionResult<User>> GetUser(int userId)
        {
            var user = await this.context.Users.FirstOrDefaultAsync(u => u.Id == userId);
            if (user == null) return NotFound();
            return Ok(user);
        }
    }
}
