import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css'

export const Dashboard = () => {
  return <main className="vw-100 vh-100" style={{ padding: '4em'}}>
    <nav className="d-flex justify-content-between align-items-center">
      <img src={logo}  className='h-100' alt=''/>
      <div style={{ background: 'grey', padding: '1em', borderRadius: '50%', color: 'white'}}>AK</div>
    </nav>
    <section className='mt-5'>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text h-100" style={{ background: 'white', borderRight: '0', borderRadius: '5px 0 0 5px'}}>
            <FontAwesomeIcon role="button" icon={faSearch} />
          </div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Search by company" 
          style={{ borderLeft: '0'}} />
      </div>
    </section>

    <section className='d-flex mt-3'>
      <section className='w-25'>

        <div class="form-group">
          <label className='fw-bold'>Sector</label>
          <select class="form-control mt-2" placeholder="abcdf">
            <option value="" disabled selected hidden>Sector</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group mt-3">
          <label className='fw-bold'>Has internal Carbon Price</label>
          <select class="form-control mt-2">
            <option value="" disabled selected hidden>Has internal Carbon Price</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group mt-3">
          <label className='fw-bold'>VCM activity since 2020</label>
          <select class="form-control mt-2">
            <option value="" disabled selected hidden>VCM activity since 2020</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group mt-3">
          <label className='fw-bold'>Durable CDR buyer probability</label>
          <select class="form-control mt-2">
            <option value="" disabled selected hidden>Durable CDR buyer probability</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>


      </section>
      <section className='w-75 p-3'>
        <table className='acclaim-table w-100'  cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Has Internal Carbon Price</th>
              <th>VCM activity since 2020</th>
              <th>Durable CDR buyer probability</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3M</td>
              <td><span class="badge bg-primary">No</span></td>
              <td><span class="badge bg-success">Yes</span></td>
              <td><span class="badge bg-primary">Unlikely - contact</span></td>
            </tr>
            <tr>
              <td>3M</td>
              <td>no</td>
              <td>yes</td>
              <td>Unlikely - contact</td>
            </tr>
            <tr>
              <td>3M</td>
              <td>no</td>
              <td>yes</td>
              <td>Unlikely - contact</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  </main>
}

export default Dashboard