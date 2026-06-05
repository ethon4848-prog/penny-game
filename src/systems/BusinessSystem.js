// Business System - Manages business creation and operation

export class BusinessSystem {
  constructor(player, economySystem) {
    this.player = player;
    this.economySystem = economySystem;
  }

  canCreateBusiness(businessType, money) {
    const costs = {
      small: 100,
      medium: 500,
      large: 2000,
    };
    return money >= costs[businessType];
  }

  createBusiness(type, name) {
    const costs = {
      small: 100,
      medium: 500,
      large: 2000,
    };

    if (!this.canCreateBusiness(type, this.player.money)) {
      return { success: false, reason: 'Insufficient funds' };
    }

    if (this.player.removeMoney(costs[type])) {
      const business = this.player.createBusiness(type, name);
      return { success: true, business };
    }

    return { success: false, reason: 'Unknown error' };
  }

  hireEmployee(businessId, employee) {
    const business = this.player.businesses.find(b => b.id === businessId);
    if (!business) return false;

    const salary = 100 * (business.employees.length + 1);
    business.employees.push({ ...employee, salary, happiness: 50 });
    return true;
  }

  payEmployees(businessId) {
    const business = this.player.businesses.find(b => b.id === businessId);
    if (!business) return false;

    let totalCost = 0;
    business.employees.forEach(emp => {
      totalCost += emp.salary;
    });

    if (this.player.money >= totalCost) {
      this.player.removeMoney(totalCost);
      return true;
    }
    return false;
  }

  updateBusinessHappiness(businessId) {
    const business = this.player.businesses.find(b => b.id === businessId);
    if (!business) return;

    business.employees.forEach(emp => {
      emp.happiness = Math.max(0, emp.happiness - 1);
    });
  }

  generateIncome(businessId, timeElapsed) {
    const business = this.player.businesses.find(b => b.id === businessId);
    if (!business) return 0;

    const baseIncome = {
      small: 10,
      medium: 50,
      large: 200,
    };

    const happinessFactor = business.employees.reduce((sum, emp) => 
      sum + (emp.happiness / 100), 0) / Math.max(1, business.employees.length);
    
    const income = (baseIncome[business.type] * timeElapsed * happinessFactor) / 1000;
    this.player.addMoney(income);
    return income;
  }
}
