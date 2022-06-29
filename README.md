# Animated likes counter

## Overview
### Demo
([Live demo page](http://amedomary.ru/Animated-likes-counter/))

https://user-images.githubusercontent.com/26141401/176402355-03d786a2-7a4c-4e24-a5cc-c792a9d431f9.mov


## Supports
React v17.0.2

## Installation
```bush
npm i animated-likes-counter
```

## Usage
React
```jsx
<LikeButtonAnimated />
```

Style
```css
.block {
  --lba-c-icon-idle: var(--your-color-1);
  --lba-c-icon-hover: var(--your-color-2);
  --lba-c-accent: var(--your-color-3);
  --lba-c-bg: var(--your-color-4);
}
```

### API
| Props          | Value                                                  | Description                                                            |
| -------------- | ------------------------------------------------------ | ---------------------------------------------------------------------- |
| disabledButton | boolean                                                | Makes the button inactive                                              |
| handleLike     | function                                               | The like event handler is triggered at the end of the flight animation |
| projectile     | String / JSX                                           | The jumping element                                                    |
| likes          | String / JSX                                           | Counter                                                                |
| style          | object {countTextActiveColor: String}                  | Props for customize some element styles some                           |
| classes        | object {root: String, icon: String, countText: String} | Props for customize some element classNames some                       |


## Example
```jsx
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <LikeButtonAnimated
        disabledButton={false}
        handleLike={() => setCount((a) => a + 1)}
        likes={count}
        projectile='+1'
        classes={{icon: 'my-class'}}
      />
    </div>
  );
}
```

## Author
Maksim "Amedomary" Grishin, [Irlix]([https://](https://irlix.com/)) IT Company