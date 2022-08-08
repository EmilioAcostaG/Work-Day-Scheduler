# Work Day Scheduler Starter Code

The goal is to create a calendar application that allows a user to save events for each hour of the day.

![User is presented with this page when the application loads.](./assets/images/Day%20Planner%20Screenshot%201.png)

Here you are presented with today's date at the top header, and a typcical work day ranging from 9am to 5pm. Each time is color-coded to represent: Past (gray), Present (red), and Future (green).

The application gives you the ability to enter activities in each time slot and save it for future reference. It is saved into local storage so it will always be accessible until you delete/update the information and update the changes.

## Adding events and making changes

---

In the following image, you can see how you can add an acitivy in different time slots.

![Events added to different time slots](./assets/images/Day%20Planner%20Screenshot%202.png)

As you can see, clicking on the "Save" button on the right end of each row adds the data into local storage so that it is still accessible even after refreshing a page, or even closing it and reopening the application.

<br>

Below you can see what happens when you remove an event from the time slot and click the "Save" button.
![Delete an event and update local storage](./assets/images/Day%20Planner%20Screenshot%203.png)

Finally, below you can see an example of how the color-coding of each time slot works. With the use of the [Moment.js](https://momentjs.com/) library, as the time updates, so will the color of each time to keep the user updated on their daily to-do activities.

![Updated image of color coding at a different time of the day](./assets/images/Day%20Planner%20Screenshot%204.png)