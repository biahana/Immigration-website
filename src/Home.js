import React from 'react';


class Home extends React.Component {

  render() {
    return (
      <div className='all'>
        <div className='w3-top'>
          <div className='w3-bar w3-white w3-padding w3-card'>
            <a href='#home' className='w3-bar-item w3-button menu'>Milorad Borota</a>

            <div className='w3-right w3-hide-small'>
              <a href='#about' className='w3-bar-item w3-button menu'>About</a>
              <a href='#company' className='w3-bar-item w3-button menu'>Company</a>
              <a href='#contact' className='w3-bar-item w3-button menu'>Contact</a>
            </div>
          </div>
        </div>

        <div className='w3-content'>

{/* ------------------------------------------  ABOUT  -------------------------------------------- */}

          <div className='w3-row w3-padding-64' id='about'>
            <div className='w3-col m6 w3-padding-large w3-hide-small'>
              <img src='./milorad.png' className='w3-round w3-image w3-opacity-min' alt='Milo' />
            </div>
            <div className='w3-col m6 w3-padding-large'>
              <h1 className='w3-center'>About me</h1><br />
              <h4>Regulated Canadian Immigration Consultant</h4>
              <p className='w3-large'>Milorad Borota is the founder, managing director and principal consultant at <a href="http://www.mbmigration.ca/" className='w3-tag w3-light-grey link' target="_blanket">MB MIGRATION SERVICE (CANADA) INC.</a>
                He is a Regulated Canadian Immigration Consultant (RCIC) with ICCRC Registration Number <a href="https://iccrc-crcic.ca/" className='w3-tag w3-light-grey link' target="_blanket">R408031</a>.
              </p>
            </div>
          </div>

          <div className=''>
              <h4>Education</h4>
              <p className='w3-large'>After obtaining formal education in the field of psychology (4 years) and social work (2 years) in former Yugoslavia Mr. Borota graduated from Ashton College Immigration Consultant Diploma program in March of 2011, in Vancouver, Canada. He is fluent in English and Serbo-Croatian; he also speaks some Russian, French and Chinese (Mandarin)</p>
              <h4>Experience</h4>
              <p className='w3-large'>Mr. Borota moved to Vancouver (Canada) in 1997 and started working as an Employment and Assistance Worker with the <a href="https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/social-development-poverty-reduction" className='w3-tag w3-light-grey link' target="_blanket">Ministry of Social Development</a>in 1998. Ministry of Social Development is part of the Government of the province of British Columbia in Canada.
              Working as an Employment and Assistance Worker for over 12 years Milorad acquired experience in working with clients with diverse ethnic background: both immigrants and native born Canadians. Considerable number of his clients have been refugees, refugee claimants and immigrants who came to Canada in all other immigration categories. By working for the provincial government Milorad has gained insight and understanding how Canadian (provincial) government works and what are the most efficient ways for clients to exercise their legal rights.
              In June of 2011 Milorad Borota became a Regulated Canadian Immigration Consultant and started working as an immigration consultant</p>
          </div>

{/* --------------------------------------------  COMPANY  ---------------------------------------- */}
          <div className='w3-row w3-padding-64' id='company'>
            <div className='w3-col l6 w3-padding-large'>
              <h1 className='w3-center'>Company</h1><br />
              <h4><a href="http://www.mbmigration.ca/" className='w3-tag w3-light-grey link' target="_blanket">MB MIGRATION</a></h4>
              <p className='w3-large'>Canadian immigration consulting company incorporated with Industry Canada in accordance with the Canada Business Corporations Act. The same company is incorporated in the province of British Columbia as well. Company headquarters are in Vancouver, British Columbia, Canada</p><br />
            </div>
            
            <div className='w3-col l6 w3-padding-large'>
              <img src="./logo.png" class="w3-round w3-image w3-opacity-min logo" alt='logo' />
            </div>
          </div>


            <div className="a">
              <h4>What services we provide?</h4>
              <p className='w3-large'>MB MIGRATION SERVICES (CANADA) INC. is owned by Milorad Borota, a Regulated Canadian Immigration Consultant and a member of the Immigration Consultants of Canada Regulatory Council (ICCRC). As an ICCRC member in good standing he is authorized by the Canadian Government to represent or advise a person for consideration - or offer to do so - in connection with a proceeding or application under the Immigration and Refugee Protection Act. These are some of the main services provided by this company/consultant:
              Client representation in their dealings with the Citizenship and Immigration Canada (CIC), Immigration and Refugee Board of Canada (IRB) and the Canada Border Services Agency (CBSA).
              Providing realistic, in-depth assessments of clients' chances of being approved for a Canadian visa in different immigration categories.
              Completing and/or proofreading immigration application forms on behalf of the clients. Providing suggestions what supporting documents to submit with their application forms.
              Preparing clients for their interviews with the visa officers.
              Students. Helping students enroll in educational programs in Canada (obtaining Letter of Acceptance) and applying for Study Permits.
              Temporary Workers. Helping clients obtain LMO (or AEO) and assistance with their application for Work Permit.
              Business immigrants. Assisting clients with application forms, supporting documents and business plans (if needed).
              Family sponsorship applications, Refugee claims, Appeals... For more detailed list of services please go to <a href="http://www.mbmigration.ca/" className='w3-tag w3-light-grey link' target="_blanket">MB MIGRATION web site</a></p>
            </div>

{/* --------------------------------------------------  CONTACT  ----------------------------------------- */}
          <div className='w3-container w3-padding-64' id='contact'>
            <h1>Contact</h1>
            <p className="w3-large">If you have any questions about immigration to Canada, please do not hesitate to contact us</p>
            <p className='w3-text-blue-grey w3-large'><b> (604) 616-2299</b></p>
            <p className="w3-large">You can also contact us by 
            <img src="./email.png" class="email" alt="email"/> "contact@mbmigration.ca"<br/> 
            <img src="./skype.png" class="skype" alt="skype"/> <img src="./googletalk.png" class="googletalk" alt="googletalk"/>  "mbmigration" <br/>
             or you can send us a message here:</p>
            <form action='/action_page.php' target='_blank'>
              <p><input className='w3-input w3-padding-16' type='text' placeholder='Name' required name='Name' /></p>
              <p><input className='w3-input w3-padding-16' type='email' placeholder='E-mail' required name='Email' /></p>
              <p>
              <span>
              <label className='w3-input w3-padding-16 label' type='topic' placeholder='Topic' required name='Topic'>Topic 
                <select name="topic" id="topic">
                <option value="Visiting">Visiting Canada</option>
                <option value="Stuying">Studying in Canada</option>
                <option value="Working">Working in Canada</option>
                <option value="Living">Living in Canada</option>
                <option value="Other">Other</option>
                </select>
                </label>
               </span> 
              </p>
              <p><input className='w3-input w3-padding-16' type='text' placeholder='Message' required name='Message' /> </p>
              <p><button className='w3-button w3-light-grey w3-section' type='submit'>SEND MESSAGE</button></p>
            </form>
          </div>


        </div>

        <footer className='w3-center w3-padding-32'>
        <img src="./footer.png" class="imgfooter" alt="footer"/>
          
          <p>Copyright @ MB MIGRATION SERVICES (CANADA) INC 2019 </p>
        </footer>

    </div>

    );
  }
}

export default Home;