import { GlobalConfiguration } from "../cfg"
import { QuartzPluginData } from "../plugins/vfile"

interface Props {
  date: Date
  config: GlobalConfiguration
}

export type ValidDateType = keyof Required<QuartzPluginData>["dates"]

export function getDate(cfg: GlobalConfiguration, data: QuartzPluginData): Date | undefined {
  if (!cfg.defaultDateType) {
    throw new Error(
      `Field 'defaultDateType' was not set in the configuration object of quartz.config.ts. See https://quartz.jzhao.xyz/configuration#general-configuration for more details.`,
    )
  }
  return data.dates?.[cfg.defaultDateType]
}

export function formatDate(d: Date, cfg: GlobalConfiguration): string {
  const dateFormat = cfg.dateFormat || {
    locales: "en-US",
    options: {
      year: "numeric",
      month: "short",
      day: "2-digit",
    },
  }
  return d.toLocaleDateString(dateFormat.locales, dateFormat.options)
}

export function Date({ date, config }: Props) {
  return <>{formatDate(date, config)}</>
}
