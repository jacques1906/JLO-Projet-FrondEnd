import { ThemeModel } from '../models/ThemeModel'
import { ThemeColor } from '../types/theme'

export class ThemeController {
  private model: ThemeModel
  private notifyChange: () => void

  constructor(notifyChange: () => void) {
    this.model = new ThemeModel()
    this.notifyChange = notifyChange
  }

  getTheme(): ThemeColor {
    return this.model.getTheme()
  }

  setTheme(color: ThemeColor): void {
    this.model.setTheme(color)
    this.notifyChange()
  }

  getColors() {
    return this.model.getColors()
  }
} 