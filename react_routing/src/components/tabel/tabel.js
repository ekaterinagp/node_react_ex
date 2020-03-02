import React from "react";

export default class Cities extends React.Component {
  renderTableData() {
    // const { cities } = this.props.cities;
    return this.props.rows.map((row, index) => {
      // const { this.props.name, country } = city;
      return (
        <div key={index}>
          <tr>
            <td>{row.name}</td>
            <td>{row.country}</td>
          </tr>
        </div>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.props.rows[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      // <div>
      //   <table>
      //     <thead>
      //       <tr>
      //         {this.props.columns.map((column, i) => (
      //           <th key={i}>{column}</th>
      //         ))}
      //       </tr>
      //     </thead>

      //     <tbody>
      //       {this.props.rows.map((row, index) => {
      //         return (
      //           <tr key={index}>
      //             {this.props.columns.map(column => {
      //               console.log(row, column, index);
      //               return (
      //                 <td key={column + index}>{row[column.toLowerCase()]}</td>
      //               );
      //             })}
      //           </tr>
      //         );
      //       })}
      //     </tbody>
      //   </table>
      // </div>
      <div>
        <table id="cities">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}
