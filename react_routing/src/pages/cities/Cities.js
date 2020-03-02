import React from "react";
import Tabel from "../../components/tabel/tabel";

export default class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: ["name", "country"],
      rows: [
        { name: "Copenhagen", country: "Denmark" },
        { name: "Madrid", country: "Spain" },
        { name: "Moscow", country: "Russia", code: "RF" }
      ]
    };
  }
  render() {
    return (
      <div>
        <Tabel
          columns={["name", "city"]}
          rows={this.state.rows}
          {...this.state}
        />
      </div>
    );
  }
}
