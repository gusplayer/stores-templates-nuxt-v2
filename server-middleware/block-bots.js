// server-middleware/block-bots.js
// Bloquea rutas típicas de bots/scanners para evitar carga innecesaria en SSR

const BLOCKED_PATHS = [
  // WordPress
  '/wp-login.php',
  '/wp-admin',
  '/wp-content',
  '/wp-includes',
  '/xmlrpc.php',
  // Joomla
  '/administrator',
  // Drupal
  '/sites/default/files',
  '/node/',
  // OpenCart / Magento
  '/admin/controller',
  '/index.php/admin',
  // Common exploit paths
  '/.env',
  '/.git',
  '/.svn',
  '/config.php',
  '/phpinfo.php',
  '/phpmyadmin',
  '/pma',
  '/mysql',
  '/backup',
  '/db',
  '/database',
  '/sql',
  '/dump',
  // Otros paths problemáticos vistos en logs
  '/cordClip',
  '/cgi-bin',
  '/scripts',
  '/aws',
  '/azure',
  '/gcloud',
]

const BLOCKED_EXTENSIONS = [
  '.php',
  '.asp',
  '.aspx',
  '.jsp',
  '.cgi',
  '.pl',
]

module.exports = function (req, res, next) {
  const url = (req.url || '').toLowerCase()
  const pathname = url.split('?')[0]

  // Verificar paths bloqueados
  for (const blockedPath of BLOCKED_PATHS) {
    if (pathname.startsWith(blockedPath.toLowerCase())) {
      res.statusCode = 404
      res.end('Not Found')
      return
    }
  }

  // Verificar extensiones bloqueadas
  for (const ext of BLOCKED_EXTENSIONS) {
    if (pathname.endsWith(ext)) {
      res.statusCode = 404
      res.end('Not Found')
      return
    }
  }

  next()
}
