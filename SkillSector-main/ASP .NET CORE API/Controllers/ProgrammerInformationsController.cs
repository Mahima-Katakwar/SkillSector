using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SkillSectorCoreApi.Models;

namespace SkillSectorCoreApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProgrammerInformationsController : ControllerBase
    {
        private readonly SkillsContext _context;

        public ProgrammerInformationsController(SkillsContext context)
        {
            _context = context;
        }

        // GET: api/ProgrammerInformations
        [HttpGet]
       
        public async Task<ActionResult<IEnumerable<ProgrammerInformation>>> GetProgrammerInformations()
        {
            return await _context.ProgrammerInformations.ToListAsync();
        }

        // GET: api/ProgrammerInformations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProgrammerInformation>> GetProgrammerInformation(int id)
        {
            var programmerInformation = await _context.ProgrammerInformations.FindAsync(id);

            if (programmerInformation == null)
            {
                return NotFound();
            }

            return programmerInformation;
        }

        // PUT: api/ProgrammerInformations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProgrammerInformation(int id, ProgrammerInformation programmerInformation)
        {
            if (id != programmerInformation.UserId)
            {
                return BadRequest();
            }

            _context.Entry(programmerInformation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProgrammerInformationExists(id))
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

        // POST: api/ProgrammerInformations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProgrammerInformation>> PostProgrammerInformation(ProgrammerInformation programmerInformation)
        {
            _context.ProgrammerInformations.Add(programmerInformation);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ProgrammerInformationExists(programmerInformation.UserId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetProgrammerInformation", new { id = programmerInformation.UserId }, programmerInformation);
        }

        // DELETE: api/ProgrammerInformations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProgrammerInformation(int id)
        {
            var programmerInformation = await _context.ProgrammerInformations.FindAsync(id);
            if (programmerInformation == null)
            {
                return NotFound();
            }

            _context.ProgrammerInformations.Remove(programmerInformation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProgrammerInformationExists(int id)
        {
            return _context.ProgrammerInformations.Any(e => e.UserId == id);
        }
    }
}
