function characterState(character) {
  if (character.health > 50) {
    return 'healthy';
  }

  if (character.health < 15) {
    return 'critical';
  }

  return 'wounded';
}

export default characterState;
