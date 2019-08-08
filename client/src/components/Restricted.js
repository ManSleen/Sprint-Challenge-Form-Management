import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../authorization/axiosWithAuth";
import { Card } from "semantic-ui-react";

const Restricted = () => {
  const [restrictedData, setRestrictedData] = useState([]);

  function setRestricted(res) {
    setRestrictedData(res);
  }

  useEffect(() => {
    axiosWithAuth()
      .get("/restricted/data")
      .then(res => {
        console.log(res);
        setRestricted(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to the ThunderDome!</h1>
      <div style={{ display: "flex", flexFlow: "row wrap" }}>
        <Card.Group centered>
          {restrictedData.map(food => (
            <Card>
              <Card.Content>
                <Card.Header>{food.name}</Card.Header>
                <Card.Meta>{food.course}</Card.Meta>
                <Card.Description>
                  Technique: {food.technique}
                  <br />
                  <br />
                  Ingredients:
                  <ul>
                    {food.ingredients.map(ing => (
                      <li>{ing}</li>
                    ))}
                  </ul>
                </Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </div>
    </div>
  );
};

export default Restricted;
