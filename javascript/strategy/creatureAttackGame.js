const DamageType = Object.freeze({
  Constant: 1,
  Growing: 2
})

class Creature
{
  constructor(attack, health)
  {
    this.attack = attack
    this.health = health
    this.alive = this.health > 0
    this.times = 0
  }
}

class Game
{
  constructor(damageStrategy)
  {
    this.setDamageStrategy(damageStrategy)
  }

  setDamageStrategy(damageType)
  {
    switch(damageType) {
      case damageType.Constant:
        this.damageStrategy = new ConstantDamageStrategy()
        break;
      case damageType.Growing:
        this.damageStrategy = new GrowingDamageStrategy()
        break;
    }
  }

  springTrapOn(creature)
  {
    this.damageStrategy.damage(creature)
    return creature.alive
  }

  
}

class DamageStrategy
{
  damage(creature) {
    if (creature.health <= 0)
      creature.alive = false
  }
}

class ConstantDamageStrategy entends DamageStrategy
{
  damage(creature)
  {
    creature.health -= 1
    super.damage(creature)
  }
}

class GrowingDamageStrategy extends DamageStrategy
{
  damage(creature)
  {
    creature.times += 1
    creature.health -= creature.times
    super.damage(creature)
  }
}

GrowingDamageStrategy.impact = {}
