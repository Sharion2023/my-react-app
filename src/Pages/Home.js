 export default function Home()  {
    return(
        <>
    <div>

          <h1 className=".App-header">
            <p>
              Welcome to Homeschool Hours Tracker
            </p>
          </h1>
    </div>

    <div className='container'>

    <form class="form-inline" action="/action_page.php">
      <div class="form-group">


      <a className='btn btn-lg btn primary' href='/CurrentHours' role='button'>
      <button type="button">Current Hours</button>
      </a>

     <a className='btn btn-lg btn primary' href='/AddHours' role='button'>
      <button type="button">Add Hours</button>
      </a>

      </div>
    </form> 
    </div>
    </>
    )
}