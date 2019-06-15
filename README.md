<h1>
<a id="user-content-piles-dashboard" class="anchor" aria-hidden="true" href="#piles-dashboard"></a>
Piles Dashboard</h1>
<blockquote>

<p>This project displays a dashboard for a Quality Department whose workforce are different genders, skills and length of service.
The term ‘Piles’ relates to an audit which is carried out daily.  It measures the number of units which require problem solving at different departments in the workplace.  The audit itself is carried out by the Quality Assurance Department at the earliest time after midnight, the details of the audit can then be commented on by department managers, where, they can action their team to reduce the problems if required.</P>

<h2>
<a id="user-content-table-of-contents" class="anchor" aria-hidden="true" href="#table-of-contents"></a>
Table of Contents</h2>

<ol start="1">
 <li>
  <a href="#ux">UX</a>
 </li>
 <li>
  <a href="#features">FEATURES</a>
   <ol>
    <li>
     <a href="#single-page">Home Page</a>
    </li>
    <li>
     <a href="#select">Shift Selector</a>
    </li>
    <li>
     <a href="#percentage-display">Gender Percentage Display</a>
    </li>
    <li>
     <a href="#counter">Direct Labour - Counter Graph</a>
    </li>
    <li>
     <a href="#auditor">Indirect Labour - Auditor Graph</a>
    </li>
    <li>
     <a href="#researcher">Indirect Labour - Researcher Graph</a>
    </li>
    <li>
     <a href="#combined">Combined Labour - Stacked Graph</a>
    </li>
     <li>
     <a href="#correlation">Correlation Gender - Linear Graph</a>
    </li>
  </ol>
 <li>
 <a href="#features-left-to-implement">FEATURES LEFT TO IMPLEMENT</a>
 </li>
 <li>
  <a href="#technologies-used">TECHNOLOGIES USED</a>
 </li>
 <li>
  <a href="#testing">TESTING</a>
 </li>
 <li>
  <a href="#deployment">DEPLOYMENT</a>
 </li>
 <li>
  <a href="#credits">CREDITS</a>
 </li>
</ol>
<h2>
  <a id="user-content-ux" class="anchor" aria-hidden="true" href="#ux"></a>
UX</h2>
<p>
The data collected in the .csv file relates to real time personnel; this is the department I currently manage.</p>
<p>This project can assist managers with decision making regarding future training of personnel to obtain higher skills.</p>
<p>It will also assist managers (when checking the holiday tracker) to be able to utilise the personnel to cover daily bin checks (direct counting), auditing of department processes and deep dive research processes.</P>
<p>The ‘Select all’ will give the user the option to either select all or to specify day or night shift personnel.</p>
<p>The ‘Select all’ selector automatically updates the percentage of ‘Gender in the department’ display and the three graphics which are related.</p>
<p>All graphics are equally spaced out in different rows to give an uncluttered feel to the dashboard.</p>

 <h2>
  <a id="user-content-features" class="anchor" aria-hidden="true" href="#features"></a>
Features</h2>
<ol>
  <li>
 <h3>
  <a id="user-content-single-page" class="anchor" aria-hidden="true" href="#single-page"></a>
Home Page</h3>

 <p>A single page application with responsive chart containers but best viewed on large screen.</p>
  </li>
 <li>
 <h3>
  <a id="user-content-select" class="anchor" aria-hidden="true" href="#select"></a>
Shift Selector</h3>
 <p>A ‘Select’ button which gives the user an option of shift personnel (Day & Night) or combined.</p>
  </li>
  <li>
 <h3>
  <a id="user-content-percentage-display" class="anchor" aria-hidden="true" href="#percentage-display"></a>
Gender Percentage Display</h3>
 <p>The display of the percentage of gender which adjusts to either selection of shift or to what process is selected or both.</p>
  </li>
  <li>
 <h3>
  <a id="user-content-Counter" class="anchor" aria-hidden="true" href="#counter"></a>
Direct Labour - Counter Graph</h3>
 <p>The first graphic relates to the direct (productivity based) process – this is a compulsory and prerequisite process all personnel must achieve before attaining a higher skillset.  Again, it responds to gender and shift selection.</p>
  </li>
  <li>
 <h3>
  <a id="user-content-auditor" class="anchor" aria-hidden="true" href="#auditor"></a>
Indirect Labour - Auditor Graph</h3>
 <p>The second graphic relates to the indirect (off task based) process – this is the next step for personnel looking to advance in the department.  Again, it responds to gender and shift selection.</p>
  </li>
  <li>
 <h3>
  <a id="user-content-researcher" class="anchor" aria-hidden="true" href="#researcher"></a>
Indirect Labour - Researcher Graph</h3>
 <p>The third graphic relates to the indirect (off task based) process – this is the final step for personnel looking to advance in the department.  Again, it responds to gender and shift selection.</p>
  </li>
 <li>
 <h3>
  <a id="user-content-combined" class="anchor" aria-hidden="true" href="#combined"></a>
Combined Labour - Stacked Graph</h3>
 <p>The fourth graphic relates to the combined three processes mentioned above – this illustrates the distribution of gender and processes (direct & indirect).  This again is responsive to the higher skillset (auditor & researcher).</p>
  </li>
 <li>
 <h3>
  <a id="user-content-correlation" class="anchor" aria-hidden="true" href="#correlation"><a/>
Correlation Gender - Linear Graph</h3>
 <p>The fifth and final graphic relates to the correlation of time of service against years since qualification (training of higher skillset).  It shows an upturn to points which indicate generally as personnel are employed at this department, their skillset increases.  There are a few outliers but that is down to the choice of the individual personnel. (Training to learn a higher skillset is not compulsory).</p>
  </li>
 </ol>
<h2>
  <a id="user-content-features-left-to-implement" class="anchor" aria-hidden="true" href="#features-left-to-implement"></a>
Features Left To Implement</h2>
<p>	Cross Training, this department is part of the support service within the workplace.  Personnel are encouraged to learn other processes at different departments.  This gives the company flexibility to manpower where high volume of order, holiday cover, and peak demand from customers.  Therefore, a further few graphics would be required depicting the level and quantity of personnel who, when required, can be guested out to other departments.</p> 

<h2>
  <a id="user-content-technologies-used" class="anchor" aria-hidden="true" href="#technologies-used"></a>
Technologies Used</h2>
 <p>The framework used was bootstrap (see link https://getbootstrap.com/) which also gave me the CSS stylesheets that was required. These gave me the structure that I required.</p>
<p>I was impressed by one of the tutorials demonstrating different fonts and therefore I included fontawesome (see link https://fontawesome.com/).</p>
<p>All data is stored into a .csv file – originally this data were compiled using Excel.</p>
<p>To produce all the visualizations, JavaScript became an important feature.  This included the following:</p>
<p>D3.min.js</p>
<p>Crossfilter.min.js</p>
<p>DC.min.js</p>
<p>Queue.min.js</p>
<p>Graph.js</p>

<h2>
  <a id="user-content-testing" class="anchor" aria-hidden="true" href="#testing"></a> 
Testing</h2>

<p>Changing of data to test functionality of graphs</p>
<p>Changing of size of graphs, ticks,(elastic)</p>
<p>Testing the shift selector for functionality</p>
<p>Using Chrome as my default browser I used its development tools to check for errors or warnings – none present.</p>
<p>I have run the CSS through a validation site (see link https://jigsaw.w3.org/css-validator/)</p> 

<p><a href="http://jigsaw.w3.org/css-validator/check/referer">
<img style="border:0;width:88px;height:31px"
src=http://jigsaw.w3.org/css-validator/images/vcss alt="Valid CSS!" /></a></p>
           
<p>Please use the following link http://jigsaw.w3.org/css-validator/check/referer (for HTML/XML document only)</p>

<h2>
  <a id="user-content-deployment" class="anchor" aria-hidden="true" href="#deployment"></a>
Deployment</h2>

 <p>This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.</p>

<p>To run locally, you can clone this repository directly into the editor of your choice by pasting git clone https://amzn1963.github.io/piles_dashboard/ into your terminal. To cut ties with this GitHub repository, type git remote rm origin into the terminal.</p>

<h2>
  <a id="user-content-credits" class="anchor" aria-hidden="true" href="#credits"></a>
Credits</h2>
<p>
<p>Content/Structure</p>
<p>The data content is taken from department headcount</p>
<p>The styling of project uses the https://codeinstitute.net/ training module</p>
