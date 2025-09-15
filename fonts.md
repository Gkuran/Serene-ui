# Fontes do Sistema Huma

## Google Fonts Necessárias

### Poppins (Títulos)
```
https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap
```

### Inter (Corpo de texto)
```
https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap
```

## Uso no CSS

```css
/* Para títulos */
.heading {
  font-family: 'Poppins', sans-serif;
}

/* Para corpo de texto */
.body {
  font-family: 'Inter', sans-serif;
}
```

## Implementação no React Native

```javascript
// Exemplo de uso nos estilos
const styles = StyleSheet.create({
  title: {
    fontFamily: theme.fontFamily.heading, // 'Poppins'
    fontWeight: theme.fontWeight.semibold,
  },
  description: {
    fontFamily: theme.fontFamily.body, // 'Inter'
    fontWeight: theme.fontWeight.normal,
  },
});
```