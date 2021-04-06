using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SkillSectorCoreApi.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillSectorCoreApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class ProgrammerInformationListsController : ControllerBase
    {
        private readonly SkillsContext _context;

        public ProgrammerInformationListsController(SkillsContext context)
        {
            _context = context;
        }

        // GET: api/ProgrammerInformationLists
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProgrammerInformationList>>> GetProgrammerInformationLists()
        {
            return await _context.ProgrammerInformationLists.ToListAsync();
        }

        // GET: api/ProgrammerInformationLists/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProgrammerInformationList>> GetProgrammerInformationList(int id)
        {
            var programmerInformationList = await _context.ProgrammerInformationLists.FindAsync(id);

            if (programmerInformationList == null)
            {
                return NotFound();
            }

            return programmerInformationList;
        }

        // PUT: api/ProgrammerInformationLists/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [EnableCors("AllowOrigin")]
        public async Task<IActionResult> PutProgrammerInformationList(int id, ProgrammerInformationList programmerInformationList)
        {
            if (id != programmerInformationList.UserId)
            {
                return BadRequest();
            }

            _context.Entry(programmerInformationList).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProgrammerInformationListExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ProgrammerInformationLists
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProgrammerInformationList>> PostProgrammerInformationList(ProgrammerInformationList programmerInformationList)
        {
            _context.ProgrammerInformationLists.Add(programmerInformationList);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProgrammerInformationList", new { id = programmerInformationList.UserId }, programmerInformationList);
        }

        // DELETE: api/ProgrammerInformationLists/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProgrammerInformationList(int id)
        {
            var programmerInformationList = await _context.ProgrammerInformationLists.FindAsync(id);
            if (programmerInformationList == null)
            {
                return NotFound();
            }

            _context.ProgrammerInformationLists.Remove(programmerInformationList);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProgrammerInformationListExists(int id)
        {
            return _context.ProgrammerInformationLists.Any(e => e.UserId == id);
        }
    }
}