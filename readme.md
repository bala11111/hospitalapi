<h1>Hospital API</h1>

This Porject is the server side API for the Hospital.

The Tech Stack used are:
   ----> Node.js
   ----> MongoDB

<h2>This Porject contains the following functionalities:</h2>

 1.<ul>Doctor:
      <li> Here a new Doctor can be registered.</li> 
      <li>  The Doctor can login using the credentials used while registering.</li> 
      </ul>

 2.<ul>Patients:
      <li> The Patients can register using their Phone numbers.</li>
      <li> The report for the patients can be created by the respective Doctor.</li>
      <li> The Reports of a particular patients can be shown by the latest date.</li></ul>

3.<ul>Report:
     <li> Can show all the reports of a particular status.</li></ul>


<h3>Theme</h3> : <p>We’re going to design an API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine +   well being of COVID-19 patients</p>

<ul>Each time a patient visits, the doctor will follow 2 steps
   <li>Doctor</li>
   <li>Patients</li>
</ul>
            
<ul>There are 2 types of users
   <li>Register the patient in the app (using phone number, if the patient
      already exists, just return the patient info in the API)
    </li>
   <li>After the checkup, create a Report
   </li>
</ul>


<ul>Patient Report will have the following fields
   <li>Created by doctor</li>
   <li>Status (You can use enums if you want to):
    - Can be either of: [Negative, Travelled-Quarantine,Symptoms-Quarantine, Positive-Admit]
</li>
 <li>Date</li>
</ul>


<ul><h3>The routes are</h3>
   <li>/doctors/register → with username and password
    </li>
   <li>/doctors/login → returns the JWT to be used
   </li>
   <li>/patients/register</li>
   <li>/patients/:id/create_report</li>
   <li>- /patients/:id/all_reports → List all the reports of a patient oldest to latest
</li>
   <li>/reports/:status → List all the reports of all the patients filtered by a specific
status
</li>
</ul>

<h3>We have used Passport JWT for the Authentication in this project</h3>