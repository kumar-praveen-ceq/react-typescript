import { Field, FieldArray, Form, Formik } from 'formik'
import React from 'react'

const FieldArraObj = () => {
    return (
        <div>
        <h1>Friend List</h1>
        <h6>This is used to show arrays of object</h6>
        <Formik
          initialValues={{ friends: [{name:"Sarang",age:"24"},{name:"Harsh",age:"23"},{name:"Yash",age:"25"},{name:"John",age:"24"},{name:"Jerry",age:"26"},{name:"Henry",age:"29"},{name:"Jim",age:"24"},{name:"Kim",age:"20"},{name:"Sam",age:"24"},{name:"Sid",age:"21"},{name:"Steve",age:"24"},] }}
          onSubmit={values =>
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
            }, 500)
          }
          children={({ values }) => (
            <Form>
              <FieldArray
                name="friends"
                render={arrayHelpers => (
                  <div>
                    {values.friends && values.friends.length > 0 ? (
                      values.friends.map((friend, index) =>{ 
                        console.log("friend",friend,'\n','index',values.friends[index])
                        return (
                        <div key={index}>
                          <Field name={`friends.${index}.name`} values={friend} />
                          <Field name={`friends.${index}.age`} values={friend} />
    
                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            -
                          </button>
                          <button
                            type="button"
                            onClick={() => arrayHelpers.push({name:"", age:''})} // insert an empty string at a position
                          >
                            +
                          </button>
                        </div>
                      )})
                    ) : (
                      <button type="button" onClick={() => arrayHelpers.push('')}>
                        {/* show this when user has removed all friends from the list */}
                        Add a friend
                      </button>
                    )}
                    <div>
                      <button type="submit">Submit</button>
                    </div>
                  </div>
                )}
              />
            </Form>
          )}
        />
      </div>
            )
}

export default FieldArraObj