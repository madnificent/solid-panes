import { DataBrowserContext, PaneRegistry } from 'pane-registry'
import { getOutliner } from '../index'
import { SolidLogic, LiveStore } from 'solid-logic'

export function createContext (
  dom: HTMLDocument,
  paneRegistry: PaneRegistry,
  store: LiveStore,
  logic: SolidLogic
): DataBrowserContext {
  return {
    dom,
    getOutliner,
    session: {
      paneRegistry,
      store,
      logic
    }
  }
}
