function generateResume() {
    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement)?.value ?? '';
    const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement)?.value ?? '';
    const experience = (document.getElementById('experience') as HTMLTextAreaElement)?.value ?? '';
    const education = (document.getElementById('education') as HTMLTextAreaElement)?.value ?? '';
    const skills = (document.getElementById('skills') as HTMLInputElement)?.value ?? '';
  
    // Create dynamic content for resume
    const resumeOutput = `
      <h3>Name</h3>
      <p>${name}</p>
      <h3>Job Title</h3>
      <p>${jobTitle}</p>
      <h4>Experience</h4>
      <p>${experience}</p>
      <h4>Education</h4>
      <p>${education}</p>
      <h4>Skills</h4>
      <ul>
        ${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
      </ul>
    `;
  
    // Update the resume preview section
    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
    } else {
      console.error('Resume output element not found');
    }
  }
  