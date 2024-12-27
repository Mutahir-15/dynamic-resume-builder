function generateResume() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    // Get form values
    var name = (_b = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
    var jobTitle = (_d = (_c = document.getElementById('jobTitle')) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : '';
    var experience = (_f = (_e = document.getElementById('experience')) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : '';
    var education = (_h = (_g = document.getElementById('education')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : '';
    var skills = (_k = (_j = document.getElementById('skills')) === null || _j === void 0 ? void 0 : _j.value) !== null && _k !== void 0 ? _k : '';
    // Create dynamic content for resume
    var resumeOutput = "\n      <h3>Name</h3>\n      <p>".concat(name, "</p>\n      <h3>Job Title</h3>\n      <p>").concat(jobTitle, "</p>\n      <h4>Experience</h4>\n      <p>").concat(experience, "</p>\n      <h4>Education</h4>\n      <p>").concat(education, "</p>\n      <h4>Skills</h4>\n      <ul>\n        ").concat(skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n      </ul>\n    ");
    // Update the resume preview section
    var resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
    else {
        console.error('Resume output element not found');
    }
}
