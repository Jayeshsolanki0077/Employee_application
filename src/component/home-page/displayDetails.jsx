import React from "react";
import { Table } from "semantic-ui-react";
import { connect } from "react-redux";

const TableExampleDefinition = (props) => {
  return (
    <Table celled structured>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell rowSpan='2'>ID</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Age</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Gender</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Email</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Phone no</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {props.employeeData.data.user.map( each => 
      <Table.Row>
        <Table.Cell>{each.id}</Table.Cell>
        <Table.Cell>{each.name}</Table.Cell>
        <Table.Cell>{each.age}</Table.Cell>
        <Table.Cell>{each.gender}</Table.Cell>
        <Table.Cell>{each.email}</Table.Cell>
        <Table.Cell>{each.phoneNo}</Table.Cell>
      </Table.Row>
       )}
      </Table.Body>
  </Table>

  );
};
const mapStateToProps = (state) => {
  return {
    employeeData: state.data
  }
}

export default connect(mapStateToProps, null)(TableExampleDefinition);
