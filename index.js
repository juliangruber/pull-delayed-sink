
module.exports = function (stream) {
  var read, started = false, id = Math.random()

  function consume (_read) {
    if(!_read) throw new Error('must be passed a readable')
    read = _read
    if(started) stream(read)
  }

  consume.ready =
  consume.start = function (_stream) {
    started = true; stream = _stream || stream
    if(read) stream(read)
  }

  return consume
}
