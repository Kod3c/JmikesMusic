# qobuz-plugin

Query the dfs:

To query the DFS use the following URL: http://{{HOST}}:{{PORT}}/volumio2/qobuz/browse?uri=<QUERY_PATH>
e.g. http://dfs.browser.volumio.org/volumio2/qobuz/browse?uri=tidal://playlists

The <QUERY_PATH> is determined by the plugn dinamically and is the uri of the item that is being browse ( or the prev uri). If browsing the root the tidal:// path shall be used

### Installing the plugin

Clone the repo

`git clone https://github.com/volumio/qobuz-plugin.git`

Install the plugin

`cd qobuz-plugin`
`volumio plugin install`

Enable the plugin (go to plugins, installed, tidal, enable, then login via oauth)

To test edits

`volumio plugin refresh; killall node; sudo journalctl -f`