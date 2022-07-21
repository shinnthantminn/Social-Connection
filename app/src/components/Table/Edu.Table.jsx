import { useState } from "react";
import {
  Body,
  Header,
  HeaderCell,
  HeaderRow,
  Row,
  Table,
  Cell,
} from "@table-library/react-table-library";
import { dropEdu } from "../../store/action/authAction";
import { connect } from "react-redux";

const EduTable = ({ profile: { education }, dropEdu }) => {
  const [nodes, setNodes] = useState([...education]);

  const handleDrop = (id) => {
    dropEdu(id);
  };

  return (
    <div>
      <Table data={{ nodes }}>
        {(table) => {
          console.log(table);
          return (
            <>
              <Header>
                <HeaderRow className="!space-x-1">
                  <HeaderCell className="!p-2 sm:!p-5 !bg-gray-100">
                    School
                  </HeaderCell>
                  <HeaderCell className="!p-2 sm:!p-5 !bg-gray-100">
                    Degree
                  </HeaderCell>
                  <HeaderCell className="!p-2 sm:!p-5 !bg-gray-100">
                    Years
                  </HeaderCell>
                  <HeaderCell className="!p-2 sm:!p-5 !bg-gray-100">
                    Manage
                  </HeaderCell>
                </HeaderRow>
              </Header>

              <Body>
                {table.map((i) => (
                  <Row
                    key={i._id}
                    item={i}
                    className="duration-300 hover:bg-gray-200"
                  >
                    <Cell className="!p-2 sm:!p-5">{i.school}</Cell>
                    <Cell className="!p-2 sm:!p-5">{i.degree}</Cell>
                    <Cell className="!p-2 sm:!p-5">{`${new Date(
                      i.from
                    ).toLocaleDateString()} - ${
                      i.to ? new Date(i.to).toLocaleDateString() : "Now"
                    }`}</Cell>
                    <Cell className="!p-2 sm:!p-5">
                      <button
                        onClick={() => handleDrop(i._id)}
                        className="btn bg-red-500 text-white"
                      >
                        Delete
                      </button>
                    </Cell>
                  </Row>
                ))}
              </Body>
            </>
          );
        }}
      </Table>
    </div>
  );
};

export default connect(null, { dropEdu })(EduTable);
