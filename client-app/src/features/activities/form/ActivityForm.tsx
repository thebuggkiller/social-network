import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity;
}

export const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initialFormState,
}) => {
  const initializeForm = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        id: "",
        title: "",
        category: "",
        description: "",
        date: "",
        city: "",
        venue: "",
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>(initializeForm);

  return (
    <Segment clearing>
      <Form>
        <Form.Input placeholder="Title" value={activity.title}></Form.Input>
        <Form.TextArea rows={2} placeholder="Desciption" value={activity.description}></Form.TextArea>
        <Form.Input placeholder="Category" value={activity.category}></Form.Input>
        <Form.Input type="date" placeholder="Date" value={activity.date}></Form.Input>
        <Form.Input placeholder="City" value={activity.city}></Form.Input>
        <Form.Input placeholder="Venue" value={activity.venue}></Form.Input>
        <Button
          floated="right"
          positive
          type="submit"
          content="Submit"
        ></Button>
        <Button
          onClick={() => setEditMode(false)}
          floated="right"
          type="submit"
          content="Cancel"
        ></Button>
      </Form>
    </Segment>
  );
};
