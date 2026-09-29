# IT313 Panhay Grace - Components and JSX

## Video Demonstration: React Components & JSX in Action

This project is a React Native application created using Expo for the IT313 Mobile Programming Laboratory Activity 4.

The application demonstrates the use of React components, JSX, props, conditional rendering, array mapping, and dynamic data in a Student Roster.

## Features

* Displays student information using a reusable `StudentCard` component.
* Uses props to pass student information such as:

  * Name
  * Course
  * Units
  * Full Load status
* Uses destructuring inside the `StudentCard` component.
* Uses conditional rendering with `isFullLoad && ...`.
* Uses `.map()` to display multiple student cards.
* Uses `student.id` as the unique key for each student.
* Displays the total number of students using `{students.length}`.
* Includes a **Reverse Roster** button to change the order of the student list.

## Project Structure

```text
src/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   └── explore.tsx
│
├── components/
│   ├── StudentCard.tsx
│   └── StudentRoster.tsx
│
└── data/
    └── student.ts
```

## Technologies Used

* React Native
* Expo
* TypeScript
* JSX
* JavaScript/TypeScript Array Methods

## How to Run

### 1. Install dependencies

```bash
npm install
```

### 2. Start the Expo development server

```bash
npx expo start
```

### 3. Open the application

The application can be opened using:

* Expo Go
* Android Emulator
* iOS Simulator
* Web Browser

## Main Components

### StudentCard

The `StudentCard` component is a reusable functional component that receives student information through props.

It demonstrates:

```tsx
name
course
units
isFullLoad
```

It also uses conditional rendering to display **Full Load** when `isFullLoad` is true.

### StudentRoster

The `StudentRoster` component contains the student array and uses `.map()` to render each student.

It also uses:

```tsx
key={student.id}
```

to provide a unique key for every student card.

The **Reverse Roster** button changes the order of the displayed students.

## Sample Student Data

The application contains sample student records with different courses, units, and load statuses.

## Author

**Grace Panhay**

**BS Information Technology**

**IT313 - Mobile Programming**
