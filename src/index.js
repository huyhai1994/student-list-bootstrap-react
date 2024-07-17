import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'


const students = [{
    company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany'
}, {
    company: 'Centro comercial Moctezuma', contact: 'Francisco Chang', country: 'Mexico'
}, {
    company: 'Ernst Handel', contact: 'Roland Mendel', country: 'Austria'
}, {
    company: 'Island Trading', contact: 'Helen Bennett', country: 'UK'
}, {
    company: 'Laughing Bacchus Winecellars', contact: 'Yoshi Tannamuri', country: 'Canada'
}, {
    company: 'Magazzini Alimentari Riuniti', contact: 'Giovanni Rovelli', country: 'Italy'
}]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div className="container py-5">
    <table className="table  table-hover table-striped table-sm">
        <thead>
        <tr>
            <th scope='col'>#</th>
            <th scope='col'>Company</th>
            <th scope='col'>Contact</th>
            <th scope='col'>Country</th>
        </tr>
        </thead>
        <tbody>
        {students.map(student => (<tr>
            <th scope='row'>{students.indexOf(student) + 1}</th>
            <td>{student.company}</td>
            <td>{student.contact}</td>
            <td>{student.country}</td>
        </tr>))}
        </tbody>
    </table>

</div>);
