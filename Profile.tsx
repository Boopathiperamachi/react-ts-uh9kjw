import * as React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const Profile: React.FC<{}> = () => {
  return (
    <div className="container">
      <div className="register col-md-5 col-sm-6">
        <h1 className="title">
          <strong>Bio Data</strong>
        </h1>

        <form role="form">
          <div className="form-group">
            <label className="reg_txt">
              Name <span>*</span>
            </label>
            <div className="controls form-inline">
              <input type="text" className="input-name" placeholder="First" />
              <input type="text" className="input-name" placeholder="Last" />
            </div>
          </div>
          <div className="clearfix"></div>

          <div className="form-group">
            <label className="reg_txt">
              Email <span>*</span>
            </label>
            <input
              type="text"
              className="form-register text"
              id=""
              placeholder="E-mail"
            />
          </div>
          <div className="clearfix"></div>

          <div className="form-group">
            <label className="reg_txt">
              Phone Number <span>*</span>
            </label>
            <div className="clearfix"></div>
            <div className="wsite-form">
              <input type="text" className="text input-name1" />
            </div>
            <div className="line">-</div>
            <div className="wsite-form">
              <input type="text" className="text input-name1" />
            </div>
            <div className="line">-</div>
            <div className="wsite-form">
              <input type="text" className="text input-name1" />
            </div>
          </div>

          <div className="clearfix"></div>

          <div className="form-group">
            <label className="reg_txt">
              Address <span>*</span>
            </label>
            <input
              type="text"
              className="form-register text"
              id=""
              placeholder="Line 1"
              style={{ marginBottom: '15px' }}
            />
            <input
              type="text"
              className="form-register text"
              id=""
              placeholder="Line 2"
            />
          </div>

          <div className="form-group">
            <div className="controls form-inline">
              <input type="text" className="input-name" placeholder="City" />
              <input type="text" className="input-name" placeholder="State" />
            </div>
          </div>

          <div className="form-group">
            <div className="controls form-inline">
              <input
                type="text"
                className="input-name"
                placeholder="Zip Code"
              />
              <input type="text" className="input-name" placeholder="Country" />
            </div>
          </div>

          <div className="form-group">
            <label className="reg_txt">
              Write Your qualification <span>*</span>
            </label>
            <input
              type="text"
              className="form-register text"
              id=""
              placeholder=""
              style={{ marginBottom: '15px' }}
            />
          </div>

          <div className="clearfix"></div>

          <div className="form-group">
            <label className="reg_txt">
              Comment <span>*</span>
            </label>
            <textarea className="form-register text"></textarea>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-default submit"
              style={{ width: '97%' }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="col-md-6 tabt">
        <table className="table">
          <tbody>
            <tr className="ztxt">
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>View</th>
            </tr>
            <tr>
              <td>Joe</td>
              <td>J@Info.com</td>
              <td>2323456</td>
              <td>
                <button className="ed">Edit</button>
              </td>
              <td>
                <button className="ed" style={{ background: '#f00' }}>
                  Delete
                </button>
              </td>
              <td>
                <button className="ed" style={{ background: '#000' }}>
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Profile;
