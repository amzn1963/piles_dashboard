<h1>
<a id="user-content-piles-dashboard" class="anchor" aria-hidden="true" href="#piles-dashboard"></a>
Piles Dashboard</h1>
<blockquote>

<p>This project displays a dashboard for a Quality Department whose workforce are different genders, skills and length of service.
The term ‘Piles’ relates to an audit which is carried out daily.  It measures the number of units which require problem solving at different departments in the workplace.  The audit itself is carried out by the Quality Assurance Department at the earliest time after midnight, the details of the audit can then be commented on by department managers, where, they can action their team to reduce the problems if required.</P>

<h2>
<a id="user-content-table-of-contents" class="anchor" aria-hidden="true" href="#table-of-contents"></a>
Table of Contents</h2>

<ol start="2">
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
UX
•	The data collected in the .csv file relates to real time personnel; this is the department I currently manage.

•	This project can assist managers with decision making regarding future training of personnel to obtain higher skills.

•	It will also assist managers (when checking the holiday tracker) to be able to utilise the personnel to cover daily bin checks (direct counting), auditing of department processes and deep dive research processes.

•	The ‘Select all’ will give the user the option to either select all or to specify day or night shift personnel.

•	The ‘Select all’ selector automatically updates the percentage of ‘Gender in the department’ display and the three graphics which are related.

•	All graphics are equally spaced out in different rows to give an uncluttered feel to the dashboard.

FEATURES
•	A single page application with responsive chart containers but best viewed on large screen.

•	A ‘Select’ button which gives the user an option of shift personnel (Day & Night) or combined

•	The display of the percentage of gender which adjusts to either selection of shift or to what process is selected or both.

•	The first graphic relates to the direct (productivity based) process – this is a compulsory and prerequisite process all personnel must achieve before attaining a higher skillset.  Again, it responds to gender and shift selection.

•	The second graphic relates to the indirect (off task based) process – this is the next step for personnel looking to advance in the department.  Again, it responds to gender and shift selection.

•	The third graphic relates to the indirect (off task based) process – this is the final step for personnel looking to advance in the department.  Again, it responds to gender and shift selection.

•	The fourth graphic relates to the combined three processes mentioned above – this illustrates the distribution of gender and processes (direct & indirect).  This again is responsive to the higher skillset (auditor & researcher).

•	The fifth and final graphic relates to the correlation of time of service against years since qualification (training of higher skillset).  It shows an upturn to points which indicate generally as personnel are employed at this department, their skillset increases.  There are a few outliers but that is down to the choice of the individual personnel. (Training to learn a higher skillset is not compulsory).

FEATURES LEFT TO IMPLEMENT
•	Cross Training
This department is part of the support service within the workplace.  Personnel are encouraged to learn other processes at different departments.  This gives the company flexibility to manpower where high volume of order, holiday cover, and peak demand from customers.  Therefore, a further few graphics would be required depicting the level and quantity of personnel who, when required, can be guested out to other departments. 
    TECHNOLOGIES USED
•	The framework used was bootstrap (see link https://getbootstrap.com/) which also gave me the CSS stylesheets that was required. These gave me the structure that I required.
•	I was impressed by one of the tutorials demonstrating different fonts and therefore I included fontawesome (see link https://fontawesome.com/). 
•	All data is stored into a .csv file – originally this data were compiled using Excel.
•	To produce all the visualizations, JavaScript became an important feature.  This included the following:
•	D3.min.js
•	Crossfilter.min.js
•	DC.min.js
•	Queue.min.js
•	Graph.js
TESTING
•	Changing of data to test functionality of graphs
•	Changing of size of graphs, ticks,(elastic) 
•	Testing the shift selector for functionality
•	Using Chrome as my default browser I used its development tools to check for errors or warnings – none present.
•	I have run the CSS through a validation site (see link https://jigsaw.w3.org/css-validator/) 

<p><a href="http://jigsaw.w3.org/css-validator/check/referer">
<img style="border:0;width:88px;height:31px"
src=http://jigsaw.w3.org/css-validator/images/vcss alt="Valid CSS!" /></a></p>
           
•	Please use the following link http://jigsaw.w3.org/css-validator/check/referer (for HTML/XML document only)
DEPLOYMENT
•	As the website was being built and down to personal work issues (full time employed, high level of overtime), commits were spread out over time.  Therefore, heavy and long coding work was carried out when time off permitted, and the commits were made.  GitHUb is up to date  and has been viewed by my mentor.
CREDITS
•	Content/Structure
The data content is taken from department headcount 
The styling of project uses the https://codeinstitute.net/ training module

    

