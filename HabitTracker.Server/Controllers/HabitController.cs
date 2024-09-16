using HabitTracker.Server.Data;
using HabitTracker.Server.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HabitTracker.Server.Controllers
{
    public class HabitController(DataContext context) : BaseController(context)
    {
        [HttpGet]
        [Route("[action]/{userId:int}")]
        public async Task<ActionResult<List<Habit>>> GetAllHabits(int userId)
        {
            List<Habit> habits = await context.Habits.Where(x => x.UserId == userId).ToListAsync();
            return Ok(habits);
        }
        [HttpPost]
        [Route("[action]")]
        public async Task<ActionResult<bool>> UpdateHabit([FromBody] Habit habit)
        {
            if (habit == null) return BadRequest("Trying To pass null");
            if (habit.Id > 0)
            {
                var existhabit = await context.Habits.FirstOrDefaultAsync(u => u.Id == habit.Id);
                if (existhabit != null)
                {
                    existhabit.UserId = habit.UserId;
                    existhabit.Name = habit.Name;
                    existhabit.Description = habit.Description;
                    existhabit.StartDate = habit.StartDate;
                    existhabit.EndDate = habit.EndDate;
                    context.Habits.Update(existhabit);
                }
            }
            else
            {
                await context.Habits.AddAsync(habit);
            }
            await context.SaveChangesAsync();
            return Ok(true);
        }
        [HttpGet]
        [Route("[action]/{habitId:int}")]
        public async Task<ActionResult<bool>> DeleteHabit(int habitId)
        {
            var habit = await this.context.Habits.FirstOrDefaultAsync(u => u.Id == habitId);
            if (habit == null) return NotFound();
            context.Habits.Remove(habit);
            await context.SaveChangesAsync();
            return Ok(true);
        }
        [HttpGet]
        [Route("[action]/{habitId:int}")]
        public async Task<ActionResult<Habit>> GetHabitById(int habitId)
        {
            var habit = await this.context.Habits.FirstOrDefaultAsync(u => u.Id == habitId);
            if (habit == null) return NotFound();
            return Ok(habit);
        }
    }
}
